export type Listing = {
    [x: string]: ReactNode;
    link: Url;
    url: string;
    title: string;
    rating: string | null;
    description: string;
    price: string;
    rating_word: string;
    rating_count: string | null;
};

export type Result = {
    content: {
        listings: Listing[];
        total_listings: string;
    };
};