import React, { useState } from 'react'
import {
  LiveExample,
} from '../../components'

import * as examples from './examples'
import styles from './Section.module.css'

const Section = (props) => {
  return (
      <div className={styles.section}>
        <div className={styles.section__id}>{props.id}</div>
        <div className={styles.section__columns}>
          <div className={styles.section__column}>
            <p>
              Хуки ("Hooks") — новое АПИ в Реакте, начиная с версии 16.8
              Это АПИ позволяет использовать стейт и другие возможности Реакта без написания классов.
              С помощью Хуков достигается большая переиспользуемость кода. Хотя и не рекомендуется переписывать текущее
              приложение на Хуки — попробовать в новом проекте однозначно стоит!
            </p>
            <div className={styles['section__optional-info']}>
              <p>
                Хук — это перехватчик обработки события или процесса.
                <br />
                Например, Гит-хук "precommit" — выполнится перед коммитов. Обычно в такой хук добавляют линтеры кода и запуск тестов.
              </p>

              <p>
                PS: а еще есть такой <a
                  href="https://en.wikipedia.org/wiki/Hook_(film)">фильм Стивена Спилберга</a>
              </p>
            </div>
          </div>
          <div className={styles.section__column}>
            <LiveExample code={examples.example_useState} scope={{ useState }} />
          </div>
        </div>
      </div>
  )
}

export default Section
