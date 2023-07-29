const React = require('react')

function home({tasks,complete}) {
    return (
        <html>
            <head>
                <title>ToDoApp</title>
            </head>
            <body>
                <h1>A Simple ToDo List App</h1>
                <form action='/todos' method='POST'>
                    <input type='text' name='name'></input>
                    <button type='submit'>Add a New Task</button>
                </form>
                <h2>Added Tasks</h2>
                <ul>
                    {
                        tasks.map((task,index) => {
                            return <li style={{display:'flex'}} key={index}>
                                        <input type="checkbox" value={index} />{task}
                                        <form style={{margin:1.5}} action={`/todos/${index}?_method=PUT`} method='POST'>
                                            <button type='submit'>&#10003;</button>
                                        </form>
                                        <form style={{margin:1.5}} action={`/todos/${index}?_method=DELETE`} method='POST'>
                                            <button type='submit'>&#10060;</button>
                                        </form>
                                   </li>
                        })
                    }
                </ul>
                <h2>Completed Tasks</h2>
                <ul>
                    {
                        complete.map((task,index) => {
                            return <li key={index}><input type="checkbox" defaultChecked />{task}</li>
                        })
                    }
                </ul>
            </body>
        </html>
    )
}


module.exports = home
