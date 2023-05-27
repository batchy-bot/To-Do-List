import './TodoCard.css';

export default function TodoCard({ children, id }) {
    return (
        <div id={id} className="todo-card">
            {children}
        </div>
    )
}