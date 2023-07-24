const React = require('react')


function home(props) {
    const { tasks, complete } = props
    // const tasks = props.tasks
    // const complete = props.complete
    return (
        <html>
            <body>
                <h2>A Simple ToDo List App</h2>
                <form action='/todos' method='POST'>
                    <input type='text' name='name'></input>
                    <button type='submit'>Add a New Task</button>
                </form>
                <h2>Added Tasks</h2>
                <ul>
                    {
                        tasks.map((task,index) => {
                            return <li key={task} >
                                <input type="checkbox" />
                                {task}
                                <form action={'/todos/'+ index+'/?_method=PUT'} method='POST'>
                                    <button>Complete</button>
                                </form>
                                </li>
                        })
                    }
                </ul>
                <h2>Completed Tasks</h2>
                <ul>
                    {
                        complete.map((task) => {
                            return <li key={task}><input type="checkbox" />{task}</li>
                        })
                    }
                </ul>
            </body>
        </html>
    )
}


module.exports = home
