
import HomeGallery from "@/components/gallery/gallery";
import classes from  './tagDetail.module.css';

export default function DetailPage({ params }) {
    return (
        <div className={classes.detail_pages}>
            <h1>#{params.tagid}</h1>
            <HomeGallery tagid={params.tagid} maxItems={15} showFilterButtons={false} />
        </div>
    );
}
