import { MdSearch  } from "react-icons/md";
import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
    return (
        <div className={s.searchWrapper}>
            <label>Find contacts by name</label>
            <div className={s.searchBox}>
                <MdSearch  className={s.searchIcon} />
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Search contacts"
                />
            </div>
        </div>
    );
};
export default SearchBox;
