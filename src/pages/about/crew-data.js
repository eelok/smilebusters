import nastya_1x from '../../assets/nastya/nastya-1x.jpg';
import nastya_2x from '../../assets/nastya/nastya-2x.jpg';
import michael_1x from '../../assets/michael/michael-1x.jpg';
import michael_2x from '../../assets/michael/michael-2x.jpg';
import danil_1x from '../../assets/danil/danil-1x.jpg';
import danil_2x from '../../assets/danil/danil-2x.jpg';
import vyacheslav_1x from '../../assets/vyacheslav/vyacheslav-1x.jpg';
import vyacheslav_2x from '../../assets/vyacheslav/vyacheslav-2x.jpg';
import alexei_1x from '../../assets/alexei/alexei-1x.jpg';
import alexei_2x from '../../assets/alexei/alexei-2x.jpg';

const CREW_DATA =
    {
        description: `
            Название Smilebusters появилось благодаря фильму Ghostbusters, который был популярен в годы детства
            Алексея Ткаченко - руководителя группы. Название можно было бы перевести на русский как Улыбаторы 
            или Притягивающие улыбки.
        `,
        persons: [
            {
                id: 1,
                name: "Анастасия Ткаченко",
                instrument: 'Клавишные',
                img_url: [nastya_1x, nastya_2x],
                info: `Настя играет на фортепиано с пяти лет. 
                Любовь к музыке и танцам у нее появилась еще до этого. Любит манго и путешествия.`
            },
            {
                id: 2,
                name: "Михаил Логинов",
                instrument: 'Ударные',
                img_url: [michael_1x, michael_2x],
                info: `Михаил - барабанщик от бога. Его хобби - компьютерные игры.`
            },
            {
                id: 3,
                name: "Данил Пруцкий",
                instrument: 'гитара',
                img_url: [danil_1x, danil_2x],
                info: `Данил серъезно изучает музыкальное искусство играет на фортепиано и гитаре.
                 Увлекается информационными технологиями.`
            },
            {
                id: 4,
                name: "Вячеслав Пруцкий",
                instrument: 'басс гитара',
                img_url: [vyacheslav_1x, vyacheslav_2x],
                info: `Вячеслав увлекается рыбалкой. Играет на бас-гитаре и очень любит шоколад.`
            },
            {
                id: 5,
                name: "Алексей Ткаченко",
                instrument: 'Художественный руководитель',
                img_url: [alexei_1x, alexei_2x],
                info: `Алексей - движущая сила ансамбля Smilebusters. Он выбирает репертуар, делает арранжировки, 
организовывает выступления и участие в конкурсах, для чего была построена студия, которая называется 
"Студия Алексея Ткаченко".`
            }
        ]
    };

export default CREW_DATA;