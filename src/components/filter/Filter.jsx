import "./filter.css";

export default function Select({
  optionsdate,
  setfilterdate,
  filterdate,
  options,
  defaultValue,
  value,
  onChange,
  search,
  setsearch,
  setsearchtype,
  searchtype,
}) {
  return (
    <div className="select">
      <select
        className="select_select"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>

      <div className="filterSearch">
        <select
          className="select_select"
          value={searchtype}
          onChange={(event) => setsearchtype(event.target.value)}
        >
          <option disabled value="">
            Search by
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>

        <input
          className="filter_input"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(event) => setsearch(event.target.value)}
        />
      </div>

      <select className='select_select' value={filterdate} onChange={(event) =>  setfilterdate(event.target.value)}>
        <option disabled value="">          
          Plan for
        </option>
        {optionsdate.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
            
    </div>
  );
}
