import './Sidebar.css'

export default function Sidebar(props: {children: any}) {
  return (
    <aside>
      <nav>
        <menu>
          {props.children}
        </menu>
      </nav>
    </aside>
  );
}
