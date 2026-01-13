import './BeansCard.css';

export default function BeansCard(props: { children: any, id: any }) {
  return (
    <div class="beans-card">
      {props.children}
      <div class="beans-cta">
        <a class="detail-link" href={"/beans/" + props.id}>
          <span>Look More</span>
          <svg width="24" height="24" viewBox="0 0 1.44 1.44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m1.08.36-.72.72M.48.36h.6v.6" stroke-width=".08" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
