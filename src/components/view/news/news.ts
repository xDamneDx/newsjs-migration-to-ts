import { Article } from '../../../utils/interfaces';
import './news.css';

enum Articles {
    QUANTITY = 10,
}

class News {
    draw(data: Article[]) {
        const news = data.length >= 10 ? data.filter((_item: Article, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        news.forEach((item: Article, idx: number) => {
            const newsClone = newsItemTemp?.content.cloneNode(true) as HTMLElement;

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            const photoEl = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            const authorEl = newsClone.querySelector('.news__meta-author') as HTMLElement;
            const dateEl = newsClone.querySelector('.news__meta-date') as HTMLElement;
            const descrEl = newsClone.querySelector('.news__description-title') as HTMLElement;
            const descrSourceEl = newsClone.querySelector('.news__description-source') as HTMLElement;
            const descrContentEl = newsClone.querySelector('.news__description-content') as HTMLElement;
            const readMoreEl = newsClone.querySelector('.news__read-more a') as HTMLElement;

            photoEl.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            authorEl.textContent = item.author || item.source.name;
            dateEl.textContent = item.publishedAt.slice(0, Articles.QUANTITY).split('-').reverse().join('-');
            descrEl.textContent = item.title;
            descrSourceEl.textContent = item.source.name;
            descrContentEl.textContent = item.description;
            readMoreEl.setAttribute('href', item.url);
            fragment.append(newsClone);
        });

        const newsEl = document.querySelector('.news') as HTMLElement;
        newsEl.innerHTML = '';
        newsEl.appendChild(fragment);
    }
}

export default News;
