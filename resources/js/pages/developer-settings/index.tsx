import { Head, useForm } from '@inertiajs/react';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import AppearanceToggleTab from '@/components/appearance-tabs';
import HeadingSmall from '@/components/heading-small';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Settings, Lock, Palette, CheckCircle2, Code2 } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Developer Settings', href: '/developer-settings' },
];

export default function DeveloperSettings() {
    // Password update form
    const passwordForm = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const [passwordSuccess, setPasswordSuccess] = useState(false);

    const submitPassword: FormEventHandler = (e) => {
        e.preventDefault();
        passwordForm.put('/developer-settings/password', {
            preserveScroll: true,
            onSuccess: () => {
                passwordForm.reset();
                setPasswordSuccess(true);
                setTimeout(() => setPasswordSuccess(false), 3000);
            },
        });
    };

    return (
        <AppLayout
            title="Developer Settings"
            breadcrumbs={breadcrumbs}
            renderHeader={() => <HeadingSmall breadcrumbs={breadcrumbs} title="Developer Settings" />}
        >
            <Head title="Developer Settings" />

            <div className="grid gap-6 max-w-4xl">
                {/* Header Card */}
                <Card className="border-border/50 shadow-sm bg-gradient-to-br from-[#264c59]/5 to-transparent">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#264c59] to-[#3d6b7a] shadow-lg">
                                <Settings className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-xl">Developer Settings</CardTitle>
                                <p className="text-sm text-muted-foreground">Manage your developer access preferences</p>
                            </div>
                        </div>
                    </CardHeader>
                </Card>

                {/* Role Display */}
                <Card className="border-border/50 shadow-sm">
                    <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#264c59] to-[#3d6b7a]">
                                <Code2 className="h-4 w-4 text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-base">Access Level</CardTitle>
                                <p className="text-xs text-muted-foreground">Your current access privileges</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-[#264c59]/10 to-transparent">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Role</span>
                                <span className="text-sm font-bold text-[#264c59]">Developer Access</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Appearance Settings */}
                <Card className="border-border/50 shadow-sm">
                    <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                                <Palette className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <CardTitle className="text-base">Appearance</CardTitle>
                                <p className="text-xs text-muted-foreground">Customize your interface theme</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <AppearanceToggleTab />
                    </CardContent>
                </Card>

                <Separator />

                {/* Update Password */}
                <Card className="border-border/50 shadow-sm">
                    <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30">
                                <Lock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                            </div>
                            <div>
                                <CardTitle className="text-base">Update Password</CardTitle>
                                <p className="text-xs text-muted-foreground">Change your developer access password</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submitPassword} className="space-y-4" autoComplete="off">
                            <div className="grid gap-2">
                                <Label htmlFor="pw_current_password">Current Password</Label>
                                <Input
                                    id="pw_current_password"
                                    type="password"
                                    value={passwordForm.data.current_password}
                                    onChange={(e) => passwordForm.setData('current_password', e.target.value)}
                                    placeholder="Enter your current password"
                                    autoComplete="new-password"
                                    data-lpignore="true"
                                    data-form-type="other"
                                />
                                {passwordForm.errors.current_password && (
                                    <p className="text-sm text-rose-600">{passwordForm.errors.current_password}</p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="new_password">New Password</Label>
                                <Input
                                    id="new_password"
                                    type="password"
                                    value={passwordForm.data.password}
                                    onChange={(e) => passwordForm.setData('password', e.target.value)}
                                    placeholder="Enter new password (min. 8 characters)"
                                    autoComplete="new-password"
                                    data-lpignore="true"
                                    data-form-type="other"
                                />
                                {passwordForm.errors.password && (
                                    <p className="text-sm text-rose-600">{passwordForm.errors.password}</p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="confirm_password">Confirm New Password</Label>
                                <Input
                                    id="confirm_password"
                                    type="password"
                                    value={passwordForm.data.password_confirmation}
                                    onChange={(e) => passwordForm.setData('password_confirmation', e.target.value)}
                                    placeholder="Confirm new password"
                                    autoComplete="new-password"
                                    data-lpignore="true"
                                    data-form-type="other"
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <Button
                                    type="submit"
                                    disabled={passwordForm.processing}
                                    className="bg-gradient-to-r from-[#264c59] to-[#3d6b7a] text-white"
                                >
                                    Update Password
                                </Button>
                                {passwordSuccess && (
                                    <span className="flex items-center gap-1 text-sm text-emerald-600">
                                        <CheckCircle2 className="h-4 w-4" />
                                        Password updated!
                                    </span>
                                )}
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
