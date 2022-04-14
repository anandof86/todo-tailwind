const BulletComponent = (props) => {
    const { completed } = props;
    return (
        <>
            {!completed ?
                <div className=" h-1 w-1 p-1 outline-1 outline-purple outline-double outline-offset-2 bg-purple mt-1.5"></div>
                : <div className=" h-1 w-1 p-1 outline-1 outline-gray-500 outline-double outline-offset-2 bg-gray-500 mt-1.5"></div>
            }
        </>
    )
}

export default BulletComponent;