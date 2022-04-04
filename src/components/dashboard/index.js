import { plus } from '@heroicons/react/solid'
import BulletComponent from '../Layout/bulletComponent';
import DahboardAllTodo from './allTodos';
const LandingComponent = () => {
    return (
        <div class="grid place-items-center h-screen mx-5">
            <div class="flex flex-grow px-10 mt-4 space-x-6 overflow-y justify-center">
                <div className="flex flex-col flex-shrink-0 w-1/3 mr-5 float-left">
                    <div className=" bg-white rounded-lg shadow-sm border p-6 mb-5">
                        <h5 className="text-2xl font-bold mb-2 mt-0">All todos</h5>
                        <div class="flex-grow border-t border-gray-100"></div>
                        <DahboardAllTodo/>
                        <div className="text-right mt-1"><a href="/home" className="text-purple text-xs hover:text-gray-600">View All</a></div>
                    </div>
                </div>
                <div className="flex flex-col flex-shrink-0 w-1/4 mr-5 float-left">
                    <div className=" bg-white rounded-lg shadow border p-6 mb-5">
                        <h5 className="text-2xl font-bold mb-2 mt-0">Assgined to you</h5>
                        <div class="flex-grow border-t border-gray-100"></div>
                        <table class="table-auto mt-2 mb-2">
                            <tbody>
                                <tr className="mt-4">
                                    <td className="align-top pr-3 pt-6"><BulletComponent/>
                                    </td>
                                    <td className="text-sm pt-6"><span> Now this is a story all about how, my life got flipped turned upside down</span>

                                    </td>
                                </tr>
                                <tr className="m-2">
                                    <td className="align-top pr-3 pt-6"><BulletComponent/>
                                    </td>
                                    <td className="text-sm pt-6"><span> Now this is a story all about how, my life got flipped turned upside down</span>

                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <div className="flex-grow border-t border-gray-100"></div>
                        <div className="text-left mt-1 text-xs text-gray-500">2 more todos</div>
                        <div className="text-right mt-1"><a href="/home" className="text-purple text-xs hover:text-gray-600">View All</a></div>
                    </div>

                </div>
                <div className="flex flex-col flex-shrink-0 w-1/4 mr-5 float-left">
                    <div className=" bg-white rounded-lg shadow border p-6 mb-5">
                        <h5 className="text-2xl font-bold mb-2 mt-0">Created by you</h5>
                        <div class="flex-grow border-t border-gray-100"></div>
                        <table class="table-auto mt-2 mb-2">
                            <tbody>
                                <tr className="pt-6">
                                    <td className="align-top pr-3 pt-6"><BulletComponent/>
                                    </td>
                                    <td className="text-sm pt-6"><span> Now this is a story all about how, my life got flipped turned upside down</span>

                                    </td>
                                </tr>
                                <tr className="mb-2">
                                    <td className="align-top pr-3 pt-6"><BulletComponent/>
                                    </td>
                                    <td className="text-sm pt-6"><span> Now this is a story all about how, my life got flipped turned upside down</span>

                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <div className="flex-grow border-t border-gray-100"></div>
                        <div className="text-left mt-1 text-xs text-gray-500">2 more todos</div>
                        <div className="text-right mt-1"><a href="#" className="text-purple text-xs hover:text-gray-600">View All</a></div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default LandingComponent;