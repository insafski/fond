import React from "react";

import BrowserFooter from "./BrowserFooter";
import MobileFooter from "./MobileFooter";

export default function Footer() {
	const services = (
		<ul className="sm:text-white mt-2">
			<li className="py-1 px-1 -mx-1 md:hover:text-gray-900">
				<a href="/" target="_self" rel="">
					Детейлинг
				</a>
			</li>
			<li className="py-1 px-1 -mx-1 md:hover:text-gray-900">
				<a href="/" target="_self" rel="">
					Керамика
				</a>
			</li>
			<li className="py-1 px-1 -mx-1 md:hover:text-gray-900">
				<a href="/" target="_self" rel="">
					Полировка
				</a>
			</li>
			<li className="py-1 px-1 -mx-1 md:hover:text-gray-900">
				<a href="/" target="_self" rel="">
					Бронирование
				</a>
			</li>
			<li className="py-1 px-1 -mx-1 md:hover:text-gray-900">
				<a href="/" target="_self" rel="">
					Салон
				</a>
			</li>
			<li className="py-1 px-1 -mx-1 md:hover:text-gray-900">
				<a href="/" target="_self" rel="">
					Кожа
				</a>
			</li>
			<li className="py-1 px-1 -mx-1 md:hover:text-gray-900">
				<a href="/" target="_self" rel="">
					Оптика
				</a>
			</li>
			<li className="py-1 px-1 -mx-1 md:hover:text-gray-900">
				<a href="/" target="_self" rel="">
					Тонировка
				</a>
			</li>
			<li className="py-1 px-1 -mx-1 md:hover:text-gray-900">
				<a href="/" target="_self" rel="">
					Диски
				</a>
			</li>
		</ul>
	);
	const navigation = (
		<ul className="mt-2 sm:text-white">
			<li className="py-1 px-1 -mx-1 md:hover:text-gray-900">
				<a href="/" target="_self" rel="">
					Главная
				</a>
			</li>
			<li className="py-1 px-1 -mx-1 md:hover:text-gray-900">
				<a href="/" target="_self" rel="">
					О нас
				</a>
			</li>
			<li className="py-1 px-1 -mx-1 md:hover:text-gray-900">
				<a href="/" target="_self" rel="">
					Услуги
				</a>
			</li>
			<li className="py-1 px-1 -mx-1 md:hover:text-gray-900">
				<a href="/" target="_self" rel="">
					Контакты
				</a>
			</li>
			<li className="py-1 px-1 -mx-1 md:hover:text-gray-900">
				<a href="/" target="_self" rel="">
					Галерея
				</a>
			</li>
		</ul>
	);
	const contacts = (
		<ul className="sm:text-white mt-2">
			<li className="py-1 px-1 -mx-1 md:hover:text-gray-900">
				<a href="/" target="_self" rel="">
					Телефон
				</a>
			</li>
			<li className="py-1 px-1 -mx-1 md:hover:text-gray-900">
				<a href="/" target="_self" rel="">
					Адрес
				</a>
			</li>
			<li className="py-1 px-1 -mx-1 md:hover:text-gray-900">
				<a href="/" target="_self" rel="">
					E-mail
				</a>
			</li>
		</ul>
	);

	return (
		<>
			<BrowserFooter services={services} contacts={contacts} navigation={navigation} />
			<MobileFooter services={services} contacts={contacts} navigation={navigation} />
		</>
	);
}
