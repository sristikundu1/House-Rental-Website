

const HouseCard = ({ allhouse }) => {
    const { _id, title, image, rent } = allhouse;
    return (
        <div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-64 object-cover" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Rent: {rent}</p>
                   
                </div>
            </div>

        </div>
    );
};

export default HouseCard;