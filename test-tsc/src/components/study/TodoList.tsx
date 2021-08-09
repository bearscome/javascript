import * as React from 'react';


const TodoList = () => {
    interface todoItem {
        item:string;
    };

    interface ItodoItems {
        idx: number;
        item: string;
        isDelete: boolean;
        onDelete?: ();
    };

    interface ItodoList  {
        todoItmes : ItodoItems[]
    }

    const [todoitem, setTodoitem] = React.useState<todoItem>({
        item:''
    })

    const [todoList, setTodoList] = React.useState<ItodoItems>({
        idx:0,
        item:'',
        isDelete: false
    });

    const [todoData, setTododata] = React.useState<ItodoList>({
        todoItmes: [todoList]
    })

    const onSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault()
        setTodoList({
            idx:todoList.idx + 1,
            item: todoitem.item,
            isDelete:false
        })
    }

    useEffect (() => {
        setTodoitem({
            item:''
        })
        
    }, [])
}

export default TodoList;