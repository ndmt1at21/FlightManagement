export type AirportModel = {
	id: string;
	ThoiGianDung: string;
	GhiChu: string | null;
	TenSB: {
		id: string;
		TenSanBay: string;
	};
};
