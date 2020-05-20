import * as locales from 'react-date-range/dist/locale';
import { useState } from 'react'
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import * as locales from 'react-date-range/dist/locale';

class Calendar extends Component {
    handleSelect(ranges) {
        console.log(ranges);
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
    }

    render() {
        const selectionRange = {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }

        const nameMapper = {
            ar: 'Arabic',
            bg: 'Bulgarian',
            ca: 'Catalan',
            cs: 'Czech',
            cy: 'Welsh',
            da: 'Danish',
            de: 'German',
            el: 'Greek',
            enGB: 'English (United Kingdom)',
            enUS: 'English (United States)',
            eo: 'Esperanto',
            es: 'Spanish',
            et: 'Estonian',
            faIR: 'Persian',
            fi: 'Finnish',
            fil: 'Filipino',
            fr: 'French',
            hi: 'Hindi',
            hr: 'Croatian',
            hu: 'Hungarian',
            hy: 'Armenian',
            id: 'Indonesian',
            is: 'Icelandic',
            it: 'Italian',
            ja: 'Japanese',
            ka: 'Georgian',
            ko: 'Korean',
            lt: 'Lithuanian',
            lv: 'Latvian',
            mk: 'Macedonian',
            nb: 'Norwegian Bokmål',
            nl: 'Dutch',
            pl: 'Polish',
            pt: 'Portuguese',
            ro: 'Romanian',
            ru: 'Russian',
            sk: 'Slovak',
            sl: 'Slovenian',
            sr: 'Serbian',
            sv: 'Swedish',
            th: 'Thai',
            tr: 'Turkish',
            uk: 'Ukrainian',
            vi: 'Vietnamese',
            zhCN: 'Chinese Simplified',
            zhTW: 'Chinese Traditional'
        };

        const localeOptions = Object.keys(locales)
            .map(key => ({
                value: key,
                label: `${key} - ${nameMapper[key] || ''}`
            }))
            .filter(item => nameMapper[item.value]);

        const [locale, setLocale] = React.useState('ja');
        const [state, setState] = useState([
            {
                startDate: new Date(),
                endDate: addDays(new Date(), 7),
                key: 'selection'
            }
        ]);

        return (
            <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
                <select
                    style={{ margin: '20px auto' }}
                    onChange={e => setLocale(e.target.value)}
                    value={locale}
                >
                    {localeOptions.map((option, i) => (
                        <option value={option.value} key={i}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <DateRangePicker
                    onChange={item => this.setState([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={1}
                    ranges={[this.state]}
                    directions='horizontal'
                />
            </div >


        )
    }
}

