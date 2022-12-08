import { Callback, HTMLElementEvent } from '../../utils/types';
import { Article, Source } from '../../utils/interfaces';
import AppLoader from './appLoader';

interface Articles {
    articles: Array<Article>;
    status: string;
    totalResults: number;
}

interface Sources {
    sources: Array<Source>;
    status: string;
    totalResults: number;
}

class AppController extends AppLoader {
    getSources(callback: Callback<Sources>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event | HTMLElementEvent<HTMLElement>, callback: Callback<Articles>) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (target instanceof HTMLElement && target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (
                    sourceId &&
                    newsContainer instanceof HTMLElement &&
                    newsContainer.getAttribute('data-source') !== sourceId
                ) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target && target.parentNode instanceof HTMLElement ? (target = target.parentNode) : null;
        }
    }
}

export default AppController;
