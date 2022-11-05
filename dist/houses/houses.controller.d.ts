import { HousesService } from './houses.service';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import RequestWithUser from 'src/auth/requestWithUser.interface';
export declare class HousesController {
    private readonly housesService;
    constructor(housesService: HousesService);
    create(house: CreateHouseDto, req: RequestWithUser): Promise<import("./entities/house.entity").House>;
    findAll(): Promise<import("./entities/house.entity").House[]>;
    findOne(id: string): Promise<import("./entities/house.entity").House>;
    update(id: string, updateHouseDto: UpdateHouseDto): Promise<import("./entities/house.entity").House>;
    remove(id: string): Promise<void>;
}
