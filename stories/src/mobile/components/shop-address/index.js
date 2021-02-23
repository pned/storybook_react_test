import React, {useState} from 'react';
import PropTypes from 'prop-types'

export const ShopAddress = ({shopInfos}) => {
  if (!shopInfos) return null;

  const {
    name,
    address
  } = shopInfos.shopInfos;

  return (
    <div className="shopAddress">
      <div className="title">Adresse du magasin</div>
      <div className="address">
        <div>{name}</div>
        <div>{address.streetAddress}</div>
        <div>{address.zipCode} {address.city}</div>
      </div>
    </div>
  )
}

ShopAddress.propTypes = {
  shopInfos: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.shape({
      streetAddress: PropTypes.string,
      zipCode: PropTypes.string,
      city: PropTypes.string,
    })
  })
}

ShopAddress.defaultProps = {
  shopInfos: null,
}
