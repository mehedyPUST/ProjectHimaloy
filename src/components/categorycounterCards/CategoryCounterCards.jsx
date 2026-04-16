import React, { useContext, useMemo } from "react";
import { TimelineContextCreate } from "../../context/TimelineContextCreator";
import { FriendsContextCreate } from "../../context/FriendsContextCreator";

const CategoryCounterCards = () => {
    const { friends } = useContext(FriendsContextCreate);
    const { timeline } = useContext(TimelineContextCreate);

    const safeFriends = useMemo(() => friends ?? [], [friends]);

    const grandTotal = useMemo(() => {
        return safeFriends.reduce((sum, friend) => {
            return sum + Number(friend.total_deposit || 0);
        }, 0);
    }, [safeFriends]);

    const totalLoan = useMemo(() => {
        return safeFriends.reduce((sum, friend) => {
            return sum + Number(friend.current_loan || 0);
        }, 0);
    }, [safeFriends]);

    const currentBalance = useMemo(() => {
        return grandTotal - totalLoan;
    }, [grandTotal, totalLoan]);

    return (
        <div className="w-11/12 mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
                <h3 className="text-sm text-gray-500 mb-2">Honorable Members</h3>
                <h2 className="font-bold text-3xl text-emerald-600">
                    {safeFriends.length}
                </h2>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
                <h3 className="text-sm text-gray-500 mb-2">Grand Total Deposit</h3>
                <h2 className="font-bold text-3xl text-emerald-600">
                    ৳ {grandTotal}
                </h2>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
                <h3 className="text-sm text-gray-500 mb-2">Total Loan Allotted</h3>
                <h2 className="font-bold text-3xl text-red-500">
                    ৳ {totalLoan}
                </h2>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
                <h3 className="text-sm text-gray-500 mb-2">Current Balance</h3>
                <h2 className="font-bold text-3xl text-blue-600">
                    ৳ {currentBalance}
                </h2>
            </div>

        </div>
    );
};

export default CategoryCounterCards;