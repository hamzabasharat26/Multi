import { update } from '@/actions/App/Http/Controllers/MeasurementController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import brandRoutes from '@/routes/brands';
import { type BreadcrumbItem } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';
import { ArrowLeft, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface Brand {
    id: number;
    name: string;
}

interface Article {
    id: number;
    article_style: string;
}

interface MeasurementSize {
    id: number;
    size: string;
    value: number;
    unit: string;
}

interface Measurement {
    id: number;
    code: string;
    measurement: string;
    tol_plus: number | null;
    tol_minus: number | null;
    side: string;
    sizes: MeasurementSize[];
}

interface Props {
    brand: Brand;
    article: Article;
    measurement: Measurement;
}

interface SizeSection {
    size: string;
    value: string;
}

export default function Edit({ brand, article, measurement }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Brands',
            href: brandRoutes.index().url,
        },
        {
            title: brand.name,
            href: brandRoutes.show(brand.id).url,
        },
        {
            title: 'Articles',
            href: brandRoutes.articles.index(brand.id).url,
        },
        {
            title: article.article_style,
            href: brandRoutes.articles.show({ brand: brand.id, article: article.id }).url,
        },
        {
            title: 'Measurements',
            href: brandRoutes.articles.measurements.index({ brand: brand.id, article: article.id }).url,
        },
        {
            title: 'Edit Measurement',
            href: brandRoutes.articles.measurements.edit({ brand: brand.id, article: article.id, measurement: measurement.id }).url,
        },
    ];

    const [sizes, setSizes] = useState<SizeSection[]>(
        measurement.sizes && measurement.sizes.length > 0
            ? measurement.sizes.map((s) => ({
                  size: s.size,
                  value: s.value.toString(),
              }))
            : [{ size: '', value: '' }],
    );

    // Derive global unit from the first size entry (all sizes share the same unit)
    const initialUnit = measurement.sizes && measurement.sizes.length > 0 ? measurement.sizes[0].unit : 'cm';

    // Use page props for validation errors (works with router.put)
    const { errors } = usePage<{ errors: Record<string, string> }>().props;
    const [processing, setProcessing] = useState(false);

    const [data, setDataState] = useState({
        code: measurement.code,
        measurement: measurement.measurement,
        unit: initialUnit,
        side: measurement.side || 'front',
        tol_plus: measurement.tol_plus?.toString() || '',
        tol_minus: measurement.tol_minus?.toString() || '',
    });

    const setData = (keyOrObj: string | Record<string, any>, value?: any) => {
        if (typeof keyOrObj === 'string') {
            setDataState((prev) => ({ ...prev, [keyOrObj]: value }));
        } else {
            setDataState((prev) => ({ ...prev, ...keyOrObj }));
        }
    };

    const addSizeSection = () => {
        setSizes([...sizes, { size: '', value: '' }]);
    };

    const removeSizeSection = (index: number) => {
        if (sizes.length > 1) {
            setSizes(sizes.filter((_, i) => i !== index));
        }
    };

    const updateSizeSection = (index: number, field: keyof SizeSection, value: string) => {
        const newSizes = [...sizes];
        newSizes[index] = { ...newSizes[index], [field]: value };
        setSizes(newSizes);
    };

    // Utility function to convert fraction string to decimal
    const fractionToDecimal = (input: string): number | null => {
        if (!input || input.trim() === '') return null;

        // Check if input is a fraction (e.g., "1/2", "3/8")
        const fractionMatch = input.trim().match(/^(\d+)\/(\d+)$/);
        if (fractionMatch) {
            const numerator = parseInt(fractionMatch[1]);
            const denominator = parseInt(fractionMatch[2]);
            if (denominator === 0) return null;
            return numerator / denominator;
        }

        // Otherwise try to parse as decimal
        const decimal = parseFloat(input);
        return isNaN(decimal) ? null : decimal;
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        // Transform sizes to ensure numeric values (handle fractions for inches)
        const transformedSizes = sizes.map((size) => ({
            size: size.size,
            value: data.unit === 'inches' ? (fractionToDecimal(size.value) ?? 0) : (parseFloat(size.value) || 0),
            unit: data.unit,
        }));

        // Convert tolerance values (handle fractions if inches selected)
        const tolPlusValue = fractionToDecimal(data.tol_plus as string);
        const tolMinusValue = fractionToDecimal(data.tol_minus as string);

        const formData = {
            code: data.code,
            measurement: data.measurement,
            side: data.side,
            tol_plus: tolPlusValue,
            tol_minus: tolMinusValue,
            sizes: transformedSizes,
        };

        router.put(update({ brand: brand.id, article: article.id, measurement: measurement.id }).url, formData, {
            preserveScroll: true,
            onBefore: () => setProcessing(true),
            onFinish: () => setProcessing(false),
            onSuccess: () => {
                console.log('Measurement updated successfully');
            },
            onError: (validationErrors) => {
                console.error('Validation errors:', validationErrors);
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Measurement - ${article.article_style}`} />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div>
                    <h1 className="text-2xl font-semibold">Edit Measurement</h1>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Update measurement details for {article.article_style}</p>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Measurement Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Code and Measurement */}
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="code">Code *</Label>
                                    <Input id="code" value={data.code} onChange={(e) => setData('code', e.target.value)} required />
                                    <InputError message={errors.code} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="measurement">Measurement *</Label>
                                    <Input
                                        id="measurement"
                                        value={data.measurement}
                                        onChange={(e) => setData('measurement', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.measurement} />
                                </div>
                            </div>

                            {/* Unit and Side Selectors */}
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="unit">Unit *</Label>
                                    <Select value={data.unit} onValueChange={(value) => setData('unit', value)} required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select unit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="cm">cm (centimeters)</SelectItem>
                                            <SelectItem value="inches">inches</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {data.unit === 'inches' && (
                                        <p className="text-xs text-muted-foreground">Fractions supported (e.g., 1/2, 3/8)</p>
                                    )}
                                    <InputError message={errors.unit} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="side">Measurement Side *</Label>
                                    <Select value={data.side} onValueChange={(value) => setData('side', value)} required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select side" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="front">
                                                <span className="flex items-center gap-2">
                                                    <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
                                                    Front Side
                                                </span>
                                            </SelectItem>
                                            <SelectItem value="back">
                                                <span className="flex items-center gap-2">
                                                    <span className="inline-block h-2 w-2 rounded-full bg-amber-500"></span>
                                                    Back / Left Side
                                                </span>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <p className="text-xs text-muted-foreground">
                                        {data.side === 'front'
                                            ? 'Measurements taken from the front of the garment'
                                            : 'Measurements taken from the back or left side of the garment'}
                                    </p>
                                    <InputError message={errors.side} />
                                </div>
                            </div>

                            {/* Tolerance Fields */}
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="tol_plus">
                                        Tol (+) {data.unit === 'inches' && <span className="text-xs text-muted-foreground">(e.g., 1/2 or 0.5)</span>}
                                    </Label>
                                    <Input
                                        id="tol_plus"
                                        type="text"
                                        value={data.tol_plus}
                                        onChange={(e) => setData('tol_plus', e.target.value)}
                                        placeholder={data.unit === 'inches' ? 'e.g., 1/2 or 0.5' : 'e.g., 0.5'}
                                    />
                                    <InputError message={errors.tol_plus} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="tol_minus">
                                        Tol (-) {data.unit === 'inches' && <span className="text-xs text-muted-foreground">(e.g., 1/4 or 0.25)</span>}
                                    </Label>
                                    <Input
                                        id="tol_minus"
                                        type="text"
                                        value={data.tol_minus}
                                        onChange={(e) => setData('tol_minus', e.target.value)}
                                        placeholder={data.unit === 'inches' ? 'e.g., 1/4 or 0.25' : 'e.g., 0.25'}
                                    />
                                    <InputError message={errors.tol_minus} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>Size Section *</CardTitle>
                                <Button type="button" variant="outline" size="sm" onClick={addSizeSection}>
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add More
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {sizes.map((size, index) => (
                                <div
                                    key={index}
                                    className="grid items-end gap-4 rounded-lg border p-4 md:grid-cols-3"
                                >
                                    <div className="grid gap-2">
                                        <Label htmlFor={`size-${index}`}>Size *</Label>
                                        <Input
                                            id={`size-${index}`}
                                            value={size.size}
                                            onChange={(e) => updateSizeSection(index, 'size', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors[`sizes.${index}.size` as keyof typeof errors]} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor={`value-${index}`}>
                                            Value * {data.unit === 'inches' && <span className="text-xs text-muted-foreground">(fraction ok)</span>}
                                        </Label>
                                        <Input
                                            id={`value-${index}`}
                                            type={data.unit === 'inches' ? 'text' : 'number'}
                                            step={data.unit === 'inches' ? undefined : '0.01'}
                                            value={size.value}
                                            onChange={(e) => updateSizeSection(index, 'value', e.target.value)}
                                            placeholder={data.unit === 'inches' ? 'e.g., 24 1/2 or 24.5' : 'e.g., 62.5'}
                                            required
                                        />
                                        <InputError message={errors[`sizes.${index}.value` as keyof typeof errors]} />
                                    </div>

                                    <div className="flex items-end">
                                        {sizes.length > 1 && (
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="sm"
                                                onClick={() => removeSizeSection(index)}
                                                className="w-full"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {errors.sizes && typeof errors.sizes === 'string' && <InputError message={errors.sizes} />}
                        </CardContent>
                    </Card>

                    <div className="flex items-center gap-4">
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Updating...' : 'Update Measurement'}
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => router.visit(brandRoutes.articles.show({ brand: brand.id, article: article.id }).url)}
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
