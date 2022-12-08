import { Source } from '../../../utils/interfaces';
import './sources.css';

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item: Source) => {
            const sourceClone = sourceItemTemp?.content.cloneNode(true) as HTMLElement;
            const itemEl = sourceClone.querySelector('.source__item') as HTMLElement;
            const itemNameEl = sourceClone.querySelector('.source__item-name') as HTMLElement;

            itemEl.setAttribute('data-source-id', item.id);
            itemNameEl.textContent = item.name;

            fragment.append(sourceClone);
        });

        const sourcesEl = document.querySelector('.sources') as HTMLElement;
        sourcesEl.append(fragment);
    }
}

export default Sources;
