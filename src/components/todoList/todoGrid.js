import { edit } from '@heroicons/react/solid'
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import CreateTodo from '../createTodo/createTodoComponent';
import AllTodoList from './todoListComponent';
import { actions} from "../../store/index";
const TodoGrid = () => {
    const dispatch = useDispatch();
    
    const drawer = useSelector((state) => state.drawer);
    const {hideDrawer, showDrawer} = bindActionCreators(actions, dispatch);
   

    return (
        <>
            <div className="grid place-items-center h-screen">
                <div className="flex flex-grow px-10 mt-4 space-x-6 content-center">
                    <div className="flex flex-col flex-shrink-0 mr-5 content-center">
                        <div className="  bg-white rounded-lg shadow border p-6 mb-5">
                            <div className='flex'>
                                <h5 className="text-2xl font-bold mb-2 mt-0 mr-auto float-left">All todos</h5>
                                <button className='ml-auto float-right bg-purple text-white text-sm rounded-md px-4 py-1.5' onClick={() => showDrawer()} type="button"  >
                                    <span className='float-left mt-0.3 mr-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </span>
                                    Add
                                </button>
                            </div>
                            <AllTodoList/>
                        </div>
                    </div>
                </div>
                
            </div>
            <CreateTodo/>
        </>





    )
}

export default TodoGrid;