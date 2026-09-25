import { Link } from "react-router";


type SearchType = {
    title: string;
    href: string;
};

const searchSugg: SearchType[] = [
    { title: "Support", href: "https://github.com/mgiftson0/gray" },
    { title: "License", href: "https://github.com/mgiftson0/gray/blob/main/LICENSE" },
];

export default function Footer() {
    return (
        <div className="flex md:flex-row flex-col items-center justify-between gap-3 text-center">
            <p className="text-sm text-muted-foreground">
                © 2026 by{" "}
                <Link
                    to="https://github.com/mgiftson0/gray" target="_blank"
                    className="hover:text-primary text-muted-foreground"
                >
                    gray
                </Link>
                , creating a better web for you.
            </p>

            <div className="flex gap-4">
                {searchSugg.map((item, index) => (
                    <Link
                        key={index}
                        target="_blank"
                        to={item.href}
                        className="text-sm hover:text-primary text-muted-foreground"
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}
