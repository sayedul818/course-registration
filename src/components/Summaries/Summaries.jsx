import PropTypes from 'prop-types';
import Summary from '../Summary/Summary';
const Summaries = ({ summaries }) => {
    // Calculate total credit hours
    const totalCreditHours = summaries.reduce((total, summary) => total + summary.credit, 0);

    // Calculate total price
    const totalPrice = summaries.reduce((total, summary) => total + summary.price, 0);

    // Display alert if total credit hours exceed the limit
    if (totalCreditHours > 20) {
        alert("You have exceeded the total credit hour limit!");
    }

    return (
        <div className='w-65 h-1/2 mt-16 p-6 m-4 shadow-lg shadow-gray-500 rounded-md bg-white'>
            <h1 className='mt-2 text-violet-700 font-bold'>Credit Hour Remaining: {Math.max(20 - totalCreditHours, 0)}</h1> 
            {/* Display remaining credit hours, minimum value is 0 */}
            <hr className='mt-2'></hr>
            <h1 className='mt-2 font-bold'>Course Name</h1>
            {
                summaries.map((summary, idx) => (
                    <Summary key={idx} summary={summary}></Summary>
                ))
            }
            <hr className='mt-2'></hr>
            <h1 className='mt-2 text-slate-500'>Total Credit Hour: {totalCreditHours}</h1> {/* Display total credit hours */}
            <hr className='mt-2'></hr>
            <h1 className='mt-2 text-slate-500'>Total Price: ${totalPrice.toFixed(2)}</h1> {/* Display total price */}
            <hr className='mt-2'></hr>
        </div>
    );
};

Summaries.propTypes = {
    summaries: PropTypes.array.isRequired
};

export default Summaries;
