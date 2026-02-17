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
import { Settings, User, Lock, Palette, CheckCircle2 } from 'lucide-react';
import { FormEventHandler, useState, useEffect } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'System Settings', href: '/system-settings' },
];

interface Props {
    currentUsername: string;
    currentRole: string;
    displayName: string;
}

export default function SystemSettings({ currentUsername, currentRole, displayName }: Props) {
    const { authRole } = usePage<SharedData>().props;

    // Username update form
    const usernameForm = useForm({
        current_password: '',
        username: currentUsername,
    });

    // Password update form
    const passwordForm = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const [usernameSuccess, setUsernameSuccess] = useState(false);
    const [passwordSuccess, setPasswordSuccess] = useState(false);

    const submitUsername: FormEventHandler = (e) => {
        e.preventDefault();
        usernameForm.put('/system-settings/username', {
            preserveScroll: true,
            onSuccess: () => {
                usernameForm.reset('current_password');
                setUsernameSuccess(true);
                setTimeout(() => setUsernameSuccess(false), 3000);
            },
        });
    };

    const submitPassword: FormEventHandler = (e) => {
        e.preventDefault();
        passwordForm.put('/system-settings/password', {
            preserveScroll: true,
            onSuccess: () => {
                passwordForm.reset();
                setPasswordSuccess(true);
                setTimeout(() => setPasswordSuccess(false), 3000);
            },
        });
    };

    const roleLabel = currentRole === 'manager_qc' ? 'Manager QC' : 'MEB Director';

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="System Settings" />

            <div className="flex h-full flex-1 flex-col gap-6 p-6 max-w-4xl">
                {/* Header */}
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#264c59]/10 dark:bg-[#264c59]/20">
                        <Settings className="h-5 w-5 text-[#264c59] dark:text-[#f7a536]" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">System Settings</h1>
                        <p className="text-sm text-slate-500">Manage your account and appearance preferences</p>
                    </div>
                </div>

                {/* Appearance Section */}
                <Card className="border-border/50 shadow-sm">
                    <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-900/30">
                                <Palette className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                            </div>
                            <div>
                                <CardTitle className="text-base">Appearance</CardTitle>
                                <p className="text-xs text-muted-foreground">Choose your preferred theme mode</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <AppearanceToggleTab />
                    </CardContent>
                </Card>

                <Separator />

                {/* Account Info */}
                <Card className="border-border/50 shadow-sm">
                    <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                                <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <CardTitle className="text-base">Account Information</CardTitle>
                                <p className="text-xs text-muted-foreground">Your current role and username</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-3 border border-slate-100 dark:border-slate-700">
                                <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Role</div>
                                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">{roleLabel}</div>
                            </div>
                            <div className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-3 border border-slate-100 dark:border-slate-700">
                                <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Username</div>
                                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">{currentUsername}</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Update Username */}
                <Card className="border-border/50 shadow-sm">
                    <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                                <User className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <div>
                                <CardTitle className="text-base">Update Username</CardTitle>
                                <p className="text-xs text-muted-foreground">Change your login username (requires current password)</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submitUsername} className="space-y-4" autoComplete="off">
                            <div className="grid gap-2">
                                <Label htmlFor="username_current_password">Current Password</Label>
                                <Input
                                    id="username_current_password"
                                    type="password"
                                    value={usernameForm.data.current_password}
                                    onChange={(e) => usernameForm.setData('current_password', e.target.value)}
                                    placeholder="Enter your current password"
                                    autoComplete="new-password"
                                    data-lpignore="true"
                                    data-form-type="other"
                                />
                                {usernameForm.errors.current_password && (
                                    <p className="text-sm text-rose-600">{usernameForm.errors.current_password}</p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="new_username">New Username</Label>
                                <Input
                                    id="new_username"
                                    type="text"
                                    value={usernameForm.data.username}
                                    onChange={(e) => usernameForm.setData('username', e.target.value)}
                                    placeholder="Enter new username"
                                />
                                {usernameForm.errors.username && (
                                    <p className="text-sm text-rose-600">{usernameForm.errors.username}</p>
                                )}
                            </div>
                            <div className="flex items-center gap-3">
                                <Button
                                    type="submit"
                                    disabled={usernameForm.processing}
                                    className="bg-gradient-to-r from-[#264c59] to-[#3d6b7a] text-white"
                                >
                                    Update Username
                                </Button>
                                {usernameSuccess && (
                                    <span className="flex items-center gap-1 text-sm text-emerald-600">
                                        <CheckCircle2 className="h-4 w-4" />
                                        Username updated!
                                    </span>
                                )}
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Update Password */}
                <Card className="border-border/50 shadow-sm">
                    <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30">
                                <Lock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                            </div>
                            <div>
                                <CardTitle className="text-base">Update Password</CardTitle>
                                <p className="text-xs text-muted-foreground">Change your login password (requires current password)</p>
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
