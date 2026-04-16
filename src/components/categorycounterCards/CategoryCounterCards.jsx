import React, { useContext } from 'react';
import { TimelineContextCreate } from '../../context/TimelineContextCreator';
import { FriendsContextCreate } from '../../context/FriendsContextCreator';

const CategoryCounterCards = () => {
    const { friends } = useContext(FriendsContextCreate);
    const { timeline } = useContext(TimelineContextCreate);

    const onTrackContacts = friends.filter(contact => contact.status === "On-Track");
    const needAttentionContacts = friends.filter(contact => contact.status === "Overdue");

    // Card data array
    const cards = [
        { label: "Total Friends", value: friends.length },
        { label: "On Track", value: onTrackContacts.length },
        { label: "Need Attention", value: needAttentionContacts.length },
        { label: "Interactions This Month", value: timeline.length }
    ];

    return (
        <div className='grid grid-cols-2 md:grid-cols-4 w-11/12 gap-10 mt-5 mx-auto text-center'>
            {cards.map((card, index) => (
                <div key={index} className='bg-white shadow-md rounded-md p-5'>
                    <h3 className='font-bold text-3xl text-green-800'>{card.value}</h3>
                    <p className='text-gray-500'>{card.label}</p>
                </div>
            ))}
        </div>
    );
};

export default CategoryCounterCards;

// বার বার একই কোড লেখা এড়াতে ম্যাপ করে কার্ড বানালাম

// import React, { useContext } from 'react';
// import { TimelineContextCreate } from '../../context/TimelineContextCreator';
// import { FriendsContextCreate } from '../../context/FriendsContextCreator';

// const CategoryCounterCards = () => {

//     const { friends } = useContext(FriendsContextCreate);
//     const { timeline } = useContext(TimelineContextCreate);
//     // console.log(friends, "ekhon khuji")

//     const onTrackContacts = friends.filter(contact => contact.status === "On-Track");
//     const needAttentionContacts = friends.filter(contact => contact.status === "Overdue");
//     // console.log("amar desh", friends)
//     return (
//         <div className='grid grid-cols-2 md:grid-cols-4 w-11/12 gap-10 mt-5 mx-auto text-center'>
//             <div className='bg-white shadow-md rounded-md p-3'>
//                 <h3 className='font-bold text-3xl'>{friends.length}</h3>
//                 <p className='text-gray-500'>Total Friends</p>
//             </div>

//             <div className='bg-white shadow-md rounded-md p-3'>
//                 <h3 className='font-bold text-3xl'>{onTrackContacts.length}</h3>
//                 <p className='text-gray-500'>On Track</p>
//             </div>

//             <div className='bg-white shadow-md rounded-md p-3'>
//                 <h3 className='font-bold text-3xl'>{needAttentionContacts.length}</h3>
//                 <p className='text-gray-500'>Need Attention</p>
//             </div>

//             <div className='bg-white shadow-md rounded-md p-3'>
//                 <h3 className='font-bold text-3xl'>{timeline.length}</h3>
//                 <p className='text-gray-500'>Interactions This Month</p>
//             </div>
//         </div>
//     );
// };

// export default CategoryCounterCards;