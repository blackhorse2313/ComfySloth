import './Breadcrumbs.scss';

interface IBreadCrumbsUrlItem {
  href: string;
  name: string;
}

interface IBreadCrumbsProps {
  urls: IBreadCrumbsUrlItem[];
}

export const BreadCrumbs = (props: IBreadCrumbsProps) => {
  const { urls } = props;
  return (
    <section>
      <div className="line">
        <h1>
          {urls.map((item) => (item.href ? <a href={item.href}>{item.name}</a> : <span>{item.name}</span>))}
        </h1>
      </div>
    </section>
  );
};
