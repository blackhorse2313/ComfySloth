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
        <div className="container">
          <h1>
            {urls.map((item, index) =>
              item.href ? (
                <a href={item.href} key={index}>
                  {item.name}
                </a>
              ) : (
                <span key={index}>{item.name}</span>
              ),
            )}
          </h1>
        </div>
      </div>
    </section>
  );
};
