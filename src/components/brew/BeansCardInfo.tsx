export default function BeansCardInfo(props: {
    name: string,
    roaster: string,
    process: string
}) {
  return (
    <div class="beans-info">
      <h4 class="beans-name">{props.name}</h4>
      <h5 class="beans-roaster">{props.roaster}</h5>
      <h5 class="beans-process">{props.process}</h5>
    </div>
  );
}
