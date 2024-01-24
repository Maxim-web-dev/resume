import { Outlet } from 'react-router-dom'

export default function Layout() {
	return (
		<div className='flex bg-[#0F172A] min-h-[100vh]'>
			{/* <svg
				className='index-[-1]'
				width='595'
				height='160'
				viewBox='0 0 595 160'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g clipPath='url(#clip0_73_1516)'>
					<g opacity='0.92' filter='url(#filter0_f_73_1516)'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M294.025 -195.397C371.794 -199.207 417.023 -166.547 478.556 -148.54C549.444 -127.795 653.905 -123.815 675.717 -83.6979C699.621 -39.7355 651.378 11.8858 588.324 53.3407C522.583 96.5619 431.59 129.344 329.788 143.735C219.591 159.312 100.989 162.573 17.727 133.999C-66.2641 105.174 -107.423 52.1926 -95.8451 -2.3348C-85.4966 -51.0729 -2.38714 -91.1162 73.5049 -128.698C137.254 -160.266 210.104 -191.286 294.025 -195.397Z'
							fill='url(#paint0_angular_73_1516)'
							fillOpacity='0.72'
						/>
					</g>
					<line
						y1='14.2955'
						x2='595'
						y2='14.2955'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						y1='28.8409'
						x2='595'
						y2='28.8409'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						y1='43.3864'
						x2='595'
						y2='43.3864'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						y1='57.9318'
						x2='595'
						y2='57.9318'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						y1='72.4773'
						x2='595'
						y2='72.4773'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						y1='87.0227'
						x2='595'
						y2='87.0227'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						y1='101.568'
						x2='595'
						y2='101.568'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						y1='116.114'
						x2='595'
						y2='116.114'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						y1='130.659'
						x2='595'
						y2='130.659'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						y1='145.205'
						x2='595'
						y2='145.205'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						y1='159.75'
						x2='595'
						y2='159.75'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='0.250008'
						y1='1.09278e-08'
						x2='0.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='16.25'
						y1='1.09278e-08'
						x2='16.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='32.25'
						y1='1.09278e-08'
						x2='32.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='48.25'
						y1='1.09278e-08'
						x2='48.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='64.25'
						y1='1.09278e-08'
						x2='64.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='80.25'
						y1='1.09278e-08'
						x2='80.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='96.25'
						y1='1.09278e-08'
						x2='96.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='112.25'
						y1='1.09278e-08'
						x2='112.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='128.25'
						y1='1.09278e-08'
						x2='128.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='144.25'
						y1='1.09278e-08'
						x2='144.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='160.25'
						y1='1.09278e-08'
						x2='160.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='176.25'
						y1='1.09278e-08'
						x2='176.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='192.25'
						y1='1.09278e-08'
						x2='192.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='208.25'
						y1='1.09278e-08'
						x2='208.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='224.25'
						y1='1.09278e-08'
						x2='224.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='240.25'
						y1='1.09278e-08'
						x2='240.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='256.25'
						y1='1.09278e-08'
						x2='256.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='272.25'
						y1='1.09278e-08'
						x2='272.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='288.25'
						y1='1.09278e-08'
						x2='288.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='304.25'
						y1='1.09278e-08'
						x2='304.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='320.25'
						y1='1.09278e-08'
						x2='320.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='336.25'
						y1='1.09278e-08'
						x2='336.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='352.25'
						y1='1.09278e-08'
						x2='352.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='368.25'
						y1='1.09278e-08'
						x2='368.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='384.25'
						y1='1.09278e-08'
						x2='384.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='400.25'
						y1='1.09278e-08'
						x2='400.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='416.25'
						y1='1.09278e-08'
						x2='416.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='432.25'
						y1='1.09278e-08'
						x2='432.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='448.25'
						y1='1.09278e-08'
						x2='448.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='464.25'
						y1='1.09278e-08'
						x2='464.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='480.25'
						y1='1.09278e-08'
						x2='480.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='496.25'
						y1='1.09278e-08'
						x2='496.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='512.25'
						y1='1.09278e-08'
						x2='512.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='528.25'
						y1='1.09278e-08'
						x2='528.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='544.25'
						y1='1.09278e-08'
						x2='544.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='560.25'
						y1='1.09278e-08'
						x2='560.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='576.25'
						y1='1.09278e-08'
						x2='576.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<line
						x1='592.25'
						y1='1.09278e-08'
						x2='592.25'
						y2='176'
						stroke='white'
						strokeOpacity='0.1'
						strokeWidth='0.5'
						strokeDasharray='2 2'
					/>
					<rect width='595' height='160' fill='url(#paint1_linear_73_1516)' />
					<line
						y1='159.75'
						x2='595'
						y2='159.75'
						stroke='#334155'
						strokeWidth='0.5'
					/>
				</g>
				<defs>
					<filter
						id='filter0_f_73_1516'
						x='-217.765'
						y='-315.703'
						width='1019.71'
						height='591.217'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'
					>
						<feFlood floodOpacity='0' result='BackgroundImageFix' />
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='BackgroundImageFix'
							result='shape'
						/>
						<feGaussianBlur
							stdDeviation='60'
							result='effect1_foregroundBlur_73_1516'
						/>
					</filter>
					<radialGradient
						id='paint0_angular_73_1516'
						cx='0'
						cy='0'
						r='1'
						gradientUnits='userSpaceOnUse'
						gradientTransform='translate(291.821 -23.5992) rotate(89.8965) scale(99.0993 237.18)'
					>
						<stop stopColor='#FE79B9' />
						<stop offset='0.416667' stopColor='#AD00FF' />
						<stop offset='1' stopColor='#2489FF' />
					</radialGradient>
					<linearGradient
						id='paint1_linear_73_1516'
						x1='297.5'
						y1='0'
						x2='297.5'
						y2='160'
						gradientUnits='userSpaceOnUse'
					>
						<stop stopColor='#0F172A' stopOpacity='0' />
						<stop offset='1' stopColor='#0F172A' />
					</linearGradient>
					<clipPath id='clip0_73_1516'>
						<rect width='5950' height='160' fill='white' />
					</clipPath>
				</defs>
			</svg> */}

			<Outlet />
		</div>
	)
}