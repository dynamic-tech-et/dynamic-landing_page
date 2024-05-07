
type HeadingComponentProps = {
    title: string;
    description: string;
    icon: any;
}
const HeadingComponent:React.FC<HeadingComponentProps> = ({title, description, icon}) => {
    return (
        <div className="flex flex-col justify-center items-center gap-8 py-8">
            <h1 className="text-5xl text-gray-900 font-bold text-center">{title}</h1>
            <div className="flex flex-col sm:flex-row sm:flex-nowrap justify-center items-center gap-2 ">
                <p className="text-green-600 text-xl">- - - - - - -</p>
                {icon}
                <p className="text-green-600 text-xl">- - - - - - -</p>
            </div>
            <p className="text-lg text-gray-800 text-center">
                {description}
            </p>
        </div>
    )
}

export default HeadingComponent;