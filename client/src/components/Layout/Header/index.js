import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBell } from "@fortawesome/free-solid-svg-icons";
import base from "../../BaseStyle/BaseStyle.module.scss";
import styles from "./Header.module.scss";
import images from "./image";

const cx = classNames.bind(styles);
const cbase = classNames.bind(base);

function Header() {
  return (
    <header>
      <section className={cx("header-area")}>
        <div className={cbase("container")}>
          <div className={cx("wrapper")}>
            <a href="/" className={cx("logo")}>
              <img src={images["./logo-netflix.png"]} />
            </a>
            <div className={cx("search")}>
              <div className={cx("search-by")}>
                <select>
                  <option>Game</option>
                  <option>Word</option>
                </select>
                <FontAwesomeIcon
                  className={cx("dropdown-icon")}
                  icon={faChevronDown}
                />
              </div>
              <input placeholder="Search anything..." />
            </div>
            <div className={cx("notice")}>
              <div className={cx("notice-open")}>
                <FontAwesomeIcon className={cx("notice-icon")} icon={faBell} />
                <span>Notification</span>
              </div>
              <ul className={cx("notice-list")}>
                <li className={cx("notice-item")}>
                  <img src={images["./logo-netflix.png"]} />
                  <div className={cx("content")}>
                    <div className={cx("title")}>Irregular verb</div>
                    <div className={cx("description")}>
                      A officia dolor illo nostrum quis asperiores, rem
                      excepturi ea autem voluptates est voluptatum quod nemo
                      tenetur harum. Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit.
                    </div>
                  </div>
                </li>
                <li className={cx("notice-item")}>
                  <img src={images["./logo-netflix.png"]} />
                  <div className={cx("content")}>
                    <div className={cx("title")}>Irregular verb</div>
                    <div className={cx("description")}>
                      Animi corrupti facere vel repellendus vero alias atque
                      iste reiciendis debitis amet quod aperiam fuga enim
                      cupiditate magnam dolorum dolores, in ipsum?
                    </div>
                  </div>
                </li>
                <li className={cx("notice-item")}>
                  <img src={images["./logo-netflix.png"]} />
                  <div className={cx("content")}>
                    <div className={cx("title")}>Irregular verb</div>
                    <div className={cx("description")}>
                      Adipisci culpa non illo quibusdam, quasi consectetur hic
                      nam ipsum excepturi eos quia nesciunt vero perspiciatis,
                      enim velit, cumque earum labore iusto.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className={cx('account')}>
              <a href="login">Login</a>
              <span>|</span>
              <a href="register">Register</a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
