import { Router } from "express"
import { AdminRoutes } from "../module/Admin/admin.route";
import { userRoutes } from "../module/user/user.route";
import { MotherboardRoutes } from "../module/Motherboard/motherboard.route";
import { PcComponentsRoutes } from "../module/pcComponents/pcComponents.route";
import { RamRoutes } from "../module/Ram/ram.route";
import { SSDRoutes } from "../module/SSD/ssd.route";
import { HDDRoutes } from "../module/HDD/hdd.route";
import { SwitchRoutes } from "../module/Switch/switch.route";
import { PrinterRoutes } from "../module/Printer/printer.route";
import { LaptopRoutes } from "../module/Laptop/laptop.route";
import { ProcessorRoutes } from "../module/Processor/processor.route";
import { DesktopRoutes } from "../module/Desktop/desktop.route";


const router = Router()

const moduleRoutes = [
    {
        path: '/admin',
        route: AdminRoutes,
    },
    {
        path: '/users',
        route: userRoutes,
    },
    {
        path: '/pc-components',
        route: PcComponentsRoutes,
    },
    {
        path: '/motherboard',
        route: MotherboardRoutes,
    },
    {
        path: '/ram',
        route: RamRoutes,
    },
    {
        path: '/ssd',
        route: SSDRoutes,
    },
    {
        path: '/hdd',
        route: HDDRoutes
    },
    {
        path: '/switch',
        route: SwitchRoutes
    },
    {
        path: '/printer',
        route: PrinterRoutes
    },
    {
        path: '/laptop',
        route: LaptopRoutes
    },
    {
        path: '/processor',
        route: ProcessorRoutes
    },
    {
        path: '/desktop',
        route: DesktopRoutes
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;

