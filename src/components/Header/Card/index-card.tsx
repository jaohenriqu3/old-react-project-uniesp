type CardProps = {
    title: string
    route: string
    image: string
} 

export const Card = ({title, route, image}: CardProps) => { 
    return(
        <Link to={route} style={{textDecoration: "none"}}>
            <div>
                <div>
                    {image}
                    {title}
                </div>
            </div>       
        </Link>
    );
}