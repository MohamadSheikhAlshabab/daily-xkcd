import Link from 'next/link'

export default function Footer(props){
    var arr=[] 
    var num;
    {num=props.users}
    for (let i = 10; i > 0; i--) {
        arr.push(num -i) 
    }
    return (
        <>
            <ul>
                {arr.map((num) =>
                    <Link key={num} href="/movies/[id].js" as={`/movies/${num}`}>
                        <a>{num} </a>
                    </Link>
                )}
                <style jsx>{`
                a{
                    margin-right: 5px;
                    color: green;
                }
                `}
            </style>
            </ul>
            <p><small>@copyright ASAC</small></p>
        </>
    );
}