import React, {useEffect, useState} from "react";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseIcon from "@material-ui/icons/Close";
import {Header, Article} from "./styled";

function HeaderPage() {
    const [open, setOpen] = useState(false);
    console.log(open);
    useEffect(() => {}, []);
    return (
        <> {
            open ? (
                <div>
                    <nav>
                        <CloseIcon onClick={
                            () => setOpen(!open)
                        }/>
                        <ul>
                            <li>
                                <a>The details</a>
                            </li>
                            <li>
                                <a>magazine</a>
                            </li>
                            <li>
                                <a>who we are</a>
                            </li>
                            <li>
                                <a>sign in</a>
                            </li>
                        </ul>
                        <section>
                            <a>start investing</a>
                            <div>
                                <a></a>
                                <a></a>
                            </div>
                        </section>
                    </nav>
                </div>
            ) : (
                <div>
                    <Header>
                        <Article>

                            <div className="w">W</div>
                            <MenuRoundedIcon className="hamburger"
                                onClick={
                                    () => setOpen(!open)
                                }/>
                        </Article>
                    </Header>
                </div>
            )
        } </>
    );
}
export default HeaderPage;
