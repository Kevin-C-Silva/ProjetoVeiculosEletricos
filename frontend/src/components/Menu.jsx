import MenuItem from './MenuItem.jsx'

const Menu = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10'>
            {items.map((item) => (
                <MenuItem key={item.id} {...item} />
            ))}
        </div>
    )
}

export default Menu