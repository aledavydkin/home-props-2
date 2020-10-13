import React from 'react';
import ListingItem from "./ListingItem";

function Listing(props) {
    const { items } = props;

    return (
        <div className="item-list">
            {items.map(item => <ListingItem key={item.listing_id} items={item} />)}
        </div>
    )
}

export default Listing;

