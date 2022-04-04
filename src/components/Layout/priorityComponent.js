const PriorityComponent = (props) => {
    const { priority } = props;
    return (
        <>
            {priority == 1 ? <span className="flex items-center h-6 px-3 text-xs font-semibold text-red-500 bg-red-100 rounded-sm float-left">High</span> : ""}
            {priority == 2 ? <span className="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-sm float-left">Medium</span> : ""}
            {priority == 3 ? <span className="flex items-center h-6 px-3 text-xs font-semibold text-blue-500 bg-blue-100 rounded-sm float-left">Low</span> : ""}
        </>
    )
}

export default PriorityComponent;