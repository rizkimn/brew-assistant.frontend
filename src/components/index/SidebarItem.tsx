export default function SidebarItem(props: {children: any, href?: string, isActive?: boolean}) {
  return (
    <li class={props.isActive ? "active" : ""}><a href={props.href || "#"}>{props.children}</a></li>
  );
}
