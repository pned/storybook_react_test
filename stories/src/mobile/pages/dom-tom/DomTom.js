import React from 'react';
import PropTypes from 'prop-types';

import '../../../../assets/scss/dom-tom.scss';

export const DomTom = ({
                           shopList
                       }) => {

    return (
        <React.Fragment>
            <div className="page" id="page" style={{paddingTop: "110.984px", minHeight: "400px"}}>
              <div className="pageBody">
                <div className="title">Votre code postal n’est rattaché à aucun magasin CibleR</div>
                <div className="subtitle">Veuillez sélectionner un magasin parmis nos 300 magasins ci-dessous :</div>
                /*new code come here*/
              </div>
            </div>
        </React.Fragment>)
};
DomTom.propTypes = {
    shopList: PropTypes.object
};

DomTom.defaultProps = {
};
