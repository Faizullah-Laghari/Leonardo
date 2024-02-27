

import { useState } from 'react';
import classes from './AiSelect.module.css';
import Image from 'next/image';

export default function AiSelect() {
    const [activeTab, setActiveTab] = useState('aisizes');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className={classes.kingaiExt}>
            <select className={classes.ai_select}>
                <option value="sd">Stable Diffusion</option>
                <option value="realxl">Realistic Vision</option>
                <option value="odalle">Open Dall-e</option>
                <option value="pix">PixArt</option>
                <option value="dreams">DreamShaper</option>
                <option value="playg">Playground</option>
                <option value="de">Dall-e</option>
                <option value="de3">Dall-e 3</option>
            </select>
            <div className={classes.sd} id="desizes">
                <ul className={classes.nav_tabs}>
                    <li className={activeTab === 'aisizes' ? classes.active : ''}><a href="#aisizes" onClick={() => handleTabClick('aisizes')} aria-expanded={activeTab === 'aisizes' ? 'true' : 'false'}>Size</a></li>
                    <li className="sdsize"><a href="#aistyles" onClick={() => handleTabClick('aistyles')} aria-expanded={activeTab === 'aistyles' ? 'true' : 'false'}>Filter</a></li>
                    <li className="sdsize"><a href="#nprompt" onClick={() => handleTabClick('nprompt')} aria-expanded={activeTab === 'nprompt' ? 'true' : 'false'}>Negative prompt</a></li>
                </ul>
                {activeTab === 'aisizes' && (
                    <div id="aisizes" role="tabpanel" className={`${classes.tabcontent} ${classes.aistyles} ${classes.active}`}>
                       <input type="radio" id="aisize9" name="aisize" value="1344x768" className="hide" />
                     <label htmlFor="aisize9" className={`${classes.ailabel} ${classes.sdsize}`} title="" data-toggle="tooltip" data-original-title="1344x768">Widescreen (16:9)</label>
                     <input type="radio" id="aisize9" name="aisize" value="1344x768" className="hide" />
                     <label htmlFor="aisize9" className={`${classes.ailabel} ${classes.sdsize}`} title="" data-toggle="tooltip" data-original-title="1344x768">Landscape (5:4) </label>
                     <input type="radio" id="aisize9" name="aisize" value="1344x768" className="hide" />
                     <label htmlFor="aisize9" className={`${classes.ailabel} ${classes.sdsize}`} title="" data-toggle="tooltip" data-original-title="1344x768">Square (1:1)</label>
                     <input type="radio" id="aisize9" name="aisize" value="1344x768" className="hide" />
                     <label htmlFor="aisize9" className={`${classes.ailabel} ${classes.sdsize}`} title="" data-toggle="tooltip" data-original-title="1344x768">Portrait (4:5)</label>
                     <input type="radio" id="aisize9" name="aisize" value="1344x768" className="hide" />
                     <label htmlFor="aisize9" className={`${classes.ailabel} ${classes.sdsize}`} title="" data-toggle="tooltip" data-original-title="1344x768">Vertical (2:3)</label>
                     <input type="radio" id="aisize9" name="aisize" value="1344x768" className="hide" />
                     <label htmlFor="aisize9" className={`${classes.ailabel} ${classes.sdsize}`} title="" data-toggle="tooltip" data-original-title="1344x768">Long (9:16)</label>
                 
                    </div>
                )}
                {activeTab === 'nprompt' && (
                    <div id="nprompt" role="tabpanel" className={`${classes.tabcontent} ${classes.aistyles}`}>
                        <textarea name="nprompt" id="n_prompt" rows="2" cols="40" className="king-form-tall-text" placeholder="Negative prompt"></textarea>
                    </div>
                )}
                {activeTab === 'aistyles' && (
                    <div id="aistyles" role="tabpanel" className={`${classes.tab_images} ${classes.ai_images}`}>
                       <div>
                        <input type="radio" id="aistyle_none" name="aistyle" value="none" className="hide" />
                        <label htmlFor="aistyle_none" className="slabel">
                            <Image src="/art3.jpg" width={80} height={80} alt="tab Images"/>
                            <span>none</span>
                        </label>
                        </div>
                        <div>
                        <input type="radio" id="aistyle_none" name="aistyle" value="none" className="hide" />
                        <label htmlFor="aistyle_none" className="slabel">
                            <Image src="/art2.jpg" width={80} height={80} alt="tab Images"/>
                            <span>none</span>
                        </label>
                        </div>
                        <div>
                        <input type="radio" id="aistyle_none" name="aistyle" value="none" className="hide" />
                        <label htmlFor="aistyle_none" className="slabel">
                            <Image src="/art1.jpg" width={80} height={80} alt="tab Images"/>
                            <span>none</span>
                        </label>
                        </div>
                        <div>
                        <input type="radio" id="aistyle_none" name="aistyle" value="none" className="hide" />
                        <label htmlFor="aistyle_none" className="slabel">
                            <Image src="/art.jpg" width={80} height={80} alt="tab Images"/>
                            <span>none</span>
                        </label>
                        </div>
                        {/* Add more radio input elements here */}
                    </div>
                )}
            </div>
        </div>
    );
}
