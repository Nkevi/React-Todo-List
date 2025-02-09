import SwitchTheme from "./SwitchTheme.tsx";

function Sidebar({
  categories,
  activeCategory,
  onSelectCategory,
}: {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  }) {
  
  return (
    <div className="sidebar">
      <SwitchTheme />
      <ul>
        {categories.map((category: string) => (
          <li
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
