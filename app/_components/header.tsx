import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 justify-between items-center flex flex-row">
                <Image src="/logo.png" alt="FWS Barber" height={22} width={120} />
                <Button variant="outline" size="icon" className="h-6 w-6">
                    <MenuIcon size={18} />
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;