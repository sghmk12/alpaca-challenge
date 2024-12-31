
interface CardProps {
    title?: string;
    children?: React.ReactNode;
}

export default function Card({title, children}: CardProps) {
    return (
        <div className="p-4 m-4 bg-white shadow-md rounded-md space-y-2 text-slate-950">
            {title ? <div className="text-xl font-bold">
                <h3>{title}</h3>
            </div> : null }
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}