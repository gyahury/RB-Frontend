'use client';

interface MenuItemsProps {
    onClick: () => void;
    subMenuName : string;
}

const MenuItems: React.FC<MenuItemsProps> = ({
    onClick,
    subMenuName
}) => {
    return ( 
        <div 
            onClick={onClick}
            className="px-4 py-3 hover:bg-neutral-100 trasition"
        >
            {subMenuName}
        </div>
     );
}
 
export default MenuItems;