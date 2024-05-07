import PropTypes from 'prop-types'

const Summary = ({summary}) => {
    // console.log(summary)
    const {id,title}=summary;
    return (
        <div className=''>
            <ol className='text-sm m-1'>
                <ol>{id}. {title}</ol>
            </ol>
        </div>
    );
};
Summary.propTypes={
    summary: PropTypes.object.isRequired
}
export default Summary;