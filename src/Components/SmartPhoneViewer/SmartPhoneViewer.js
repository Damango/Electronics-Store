import React from 'react'
import "./SmartPhoneViewer.css"

const SmartPhoneViewer = () => {
    return ( <div className="smart-phone-viewer-container">

        <div className="product-images-container">

            <div className="product-image-wrapper">
                <div className="product-image"></div>
                <div className="image-preview-container">
                    <div className="preview-image"></div>
                </div>
                <div className="image-navigator-container">
                <div className="image-navigator-button" style={{transform: 'rotate(180deg)'}}><i class="fas fa-long-arrow-alt-right"></i></div>
                    <div className="image-navigator-button"><i class="fas fa-long-arrow-alt-right"></i></div>
                   
                </div>
            </div>

        </div>


        <div className="product-details-options-container">
            <div className="product-details-options-wrapper">
                <div className="product-details-header">iPhone 13</div>
                <div className="product-specs-container">
                
                    <div className="product-specs-list">
                        <div className="product-spec-item">
                            Brand: <i class="fab fa-apple"></i> Apple
                        </div>
                        <div className="product-spec-item">
                            Processor: <i class="fas fa-microchip"></i> A13 Bionic Chip
                        </div>
                        <div className="product-spec-item">
                            Display: XDR, 2560 x 1600, 227 PPI
                        </div>
                        <div className="product-spec-item">
                            Camera: 24 MP
                        </div>
                        <div className="product-spec-item">
                            Size: 6.7"
                        </div>
                        <div className="product-spec-item">
                            Network Chip: 5G
                        </div>
                    </div>
                </div>

                <div className="product-options-container">
                    <div className="phone-type-selectors-container">
                        <div className="phone-selector-header">Models</div>
                        <div className="phone-type-container">
                            <div className="phone-type-title">iPhone 13</div>
                            <div className="phone-type-price">$799</div>
                            <div className="phone-type-price-monthly">$41.62/mo</div>
                        </div>
                        <div className="phone-type-container">
                            <div className="phone-type-title">iPhone 13 Pro</div>
                            <div className="phone-type-price">$999</div>
                            <div className="phone-type-price-monthly">$41.62/mo</div>
                        </div>
                        <div className="phone-type-container">
                            <div className="phone-type-title">iPhone 13 Pro Max</div>
                            <div className="phone-type-price">$1099</div>
                            <div className="phone-type-price-monthly">$41.62/mo</div>
                        </div>
                    </div>

                    <div className="phone-color-selectors-container">
                        <div className="phone-selector-header">Colors</div>
                        <div className="phone-color-selector-container">
                            <div className="phone-color-name">Blue</div>
                            <div className="phone-color-example"></div>
                        </div>
                        <div className="phone-color-selector-container">
                            <div className="phone-color-name">Blue</div>
                            <div className="phone-color-example"></div>
                        </div>
                        <div className="phone-color-selector-container">
                            <div className="phone-color-name">Blue</div>
                            <div className="phone-color-example"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    </div> );
}
 
export default SmartPhoneViewer;