import { Model } from "@nozbe/watermelondb";
import { field, date } from "@nozbe/watermelondb/decorators";

export default class Article extends Model {
    static table = "articles";


    @field("title") title;
    @field("image") image;
    @field("url") url;
    @field("description") description;

    @date("date_added") date_added;

}